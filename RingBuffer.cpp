#include <iostream>
#include <vector>
#include <mutex>
#include <thread>
#include <chrono>
#include <random>
#include <algorithm>

class RingBuffer {
public:
    RingBuffer(size_t size) : buffer(size), read_ptr(0), write_ptr(0) {}

    bool push(int data) {
        std::unique_lock<std::mutex> lock(mutex);
        size_t next_write_ptr = (write_ptr + 1) % buffer.size();
        if(next_write_ptr == read_ptr) {
            return false;
        }
        buffer[write_ptr] = data;
        write_ptr = next_write_ptr;
        return true;
    }

    int pop() {
        std::unique_lock<std::mutex> lock(mutex);
        if(read_ptr == write_ptr) {
            return -1;
        }
        int result = buffer[read_ptr];
        read_ptr = (read_ptr + 1) % buffer.size();
        return result;
    }

private:
    std::vector<int> buffer;
    size_t read_ptr, write_ptr;
    std::mutex mutex;
};

void data_generator(RingBuffer &buffer, size_t max_count, double mean, double stddev) {
    std::random_device rd;
    std::mt19937 gen(rd());
    std::normal_distribution<> d(mean, stddev);

    for(size_t i = 0; i < max_count; i++) {
        size_t sleep_time = std::round(std::max(0., d(gen)));
        std::this_thread::sleep_for(std::chrono::milliseconds(sleep_time));
        if(buffer.push(i)) {
            std::cout << "Generated data: " << i << std::endl;
        } else {
            std::cout << "Buffer full, lost data: " << i << std::endl;
        }
    }
}

void data_processor(RingBuffer &buffer, size_t max_count, double mean, double stddev) {
    std::random_device rd;
    std::mt19937 gen(rd());
    std::normal_distribution<> d(mean, stddev);

    for(size_t i = 0; i < max_count; i++) {
        size_t sleep_time = std::round(std::max(0., d(gen)));
        std::this_thread::sleep_for(std::chrono::milliseconds(sleep_time));
        int data = buffer.pop();
        if(data >= 0) {
            std::cout << "Processed data: " << data << std::endl;
        } else {
            std::cout << "Buffer empty, waiting for data" << std::endl;
        }
    }
}

int main() {
    RingBuffer buffer(10);

    double data_gen_mean = 30;
    double data_gen_stddev = 5;
    double data_proc_mean = 25;
    double data_proc_stddev = 5;

    size_t num_data_points = 100;

    std::thread generator(data_generator, std::ref(buffer), num_data_points, data_gen_mean, data_gen_stddev);
    std::thread processor(data_processor, std::ref(buffer), num_data_points, data_proc_mean, data_proc_stddev);

    generator.join();
    processor.join();
}
