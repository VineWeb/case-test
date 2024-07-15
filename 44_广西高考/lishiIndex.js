const table = document.getElementById("table")

const thead = document.querySelectorAll('#table thead tr td div');
const headers = Array.from(thead).map(th => th.innerHTML);
const dataParams = [
  'totalScore',
  'persons',
  'totalPersons',
  'place',
]
const rows = document.querySelectorAll('#table tbody tr');
const tableData = Array.from(rows).map((row, index) => {
  const cells = row.querySelectorAll('td');
  const list = Array.from(cells)
  const data = {}
  list.map((item, i) => {
    const val = item.textContent.match(/\d+/g)[0]
    const value = val ? Number(val) : null
    data['id'] = String(index)
    data[dataParams[i]] = value
  })
  return data
});
console.log(tableData, 'tableData')
