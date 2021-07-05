const decoder = (song) => {
  const decoded = [];
  song.split('WUB').forEach((el) => {
    if (el !== '') {
      decoded.push(el);
    }
  });
  return decoded.join(' ');
};

console.log(decoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));
