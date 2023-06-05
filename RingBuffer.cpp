#include <iostream>
#include <thread>
#include <algorithm>
#include <mutex>
#include <chrono>
#include <vector>

#define RING_SIZE 20
#define NEXT(index) ((index+1) % RING_SIZE)

using namespace std;

typedef struct Ring{
    int buf[RING_SIZE];
    int head;
    int tail;
} Ring;

// Initializa Ring
void InitRing(Ring *ring) {
    ring->head = ring->tail = 0;
}

// Check full
int IsFull(Ring *ring) {
    return NEXT(ring->tail) == ring->head;
}

// Check empty
int IsEmpty(Ring *ring) {
    return ring->head == ring->tail;
}

// Put data in ring
void putData(Ring *ring, int data, mutex& m) {
    m.lock();
    this_thread::sleep_for(chrono::milliseconds(100));
    if(IsFull(ring)) {
        cout << "Ring is full" << '\n';
        ring->head = 0;
    }
    ring->buf[ring->head] = data;
    ring->head = NEXT(ring->head);
    m.unlock();
}

// Get data from ring
void getData(Ring *ring, mutex& m) {
    m.lock();
    this_thread::sleep_for(chrono::milliseconds(100));
    int temp = 0;
    if(IsEmpty(ring)) {
        cout << "Ring is empty" << '\n';
    }
    temp = ring->buf[ring->tail];
    ring->tail = NEXT(ring->tail);
    m.unlock();
}

int main(void) {
    cout << "Program Start" << '\n';

    // Ring 객체 생성
    Ring ring;

    // Mutex 설정
    mutex m;
    int num;

    cout << "숫자를 입력하세요: " << '\n';
    cin >> num;

    // 링버퍼 초기화
    InitRing(&ring);
    
    // Thread -> Producer, Consumer 생성
    while(true) {
        if(IsFull(&ring) != 0) 
            break;
        thread producer(putData, &ring, num, ref(m));
        thread consumer(getData, &ring, ref(m));

        producer.join();
        consumer.join();
    }

    
    return 0;
}

