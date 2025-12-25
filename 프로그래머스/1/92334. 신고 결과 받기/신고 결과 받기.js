function solution(id_list, report, k) {
  const uniqueReports = [...new Set(report)];

  const reportedCount = {};

  uniqueReports.forEach(entry => {
    const [from, to] = entry.split(" ");
    reportedCount[to] = (reportedCount[to] || 0) + 1;
  });

  const banned = new Set(
    Object.keys(reportedCount).filter(user => reportedCount[user] >= k)
  );

  const mailCount = {};
  id_list.forEach(id => {
    mailCount[id] = 0;
  });

  uniqueReports.forEach(entry => {
    const [from, to] = entry.split(" ");
    if (banned.has(to)) {
      mailCount[from]++;
    }
  });

  return id_list.map(id => mailCount[id]);
}