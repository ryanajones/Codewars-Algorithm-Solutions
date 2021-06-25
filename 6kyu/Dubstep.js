const decoder = (song) => {
  const decoded = [];
  song.split('WUB').forEach((el) => {
    if (el !== '') {
      decoded.push(el);
    }
  });
  return decoded.join(' ');
};

decoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB');
