function solution(phone_book) {
  const sortedArr = phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (sortedArr[i + 1].startsWith(sortedArr[i])) {
      return false;
    }
  }

  return true;
}
