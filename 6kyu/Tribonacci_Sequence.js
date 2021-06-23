const trib = (sig, n) => {
  const sequence = sig;
  for (let i = 0; i < n - 3; i++) {
    sequence.push(sequence[i] + sequence[i + 1] + sequence[i + 2]);
  }
  return sequence.slice(0, n);
};

trib([1, 1, 1], 10);

// Original Solution
// const trib = (sig, n) => {
// 	let index = 2;
// 	const sequence = sig;
// 	while (sequence.length < n) {
// 		const add = sequence[index - 2] + sequence[index - 1] + sequence[index];
// 		sequence.push(add);
// 		index += 1;
// 	}
// 	if (n === 1) {
// 		return [sequence[0]];
// 	}
// 	if (n === 2) {
// 		return [sequence[0], sequence[1]];
// 	}
// 	return sequence;
// }
