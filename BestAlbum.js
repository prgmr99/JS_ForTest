function solution(genres, plays) {
  const array = [];
  const length = genres.length;

  for (let i = 0; i < length; i++) {
    array.push({ genre: genres[i], play: plays[i], index: i });
  }

  const genrePlayCount = array.reduce((acc, cur) => {
    if (!acc[cur.genre]) {
      acc[cur.genre] = 0;
    }
    acc[cur.genre] += cur.play;
    return acc;
  }, {});

  const sortedGenres = Object.keys(genrePlayCount).sort(
    (a, b) => genrePlayCount[b] - genrePlayCount[a]
  );

  const sortedArray = [];
  sortedGenres.forEach((genre) => {
    const songs = array.filter((song) => song.genre === genre);
    songs.sort((a, b) => b.play - a.play);
    sortedArray.push(...songs.slice(0, 2));
  });

  return sortedArray.map((song) => song.index);
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
