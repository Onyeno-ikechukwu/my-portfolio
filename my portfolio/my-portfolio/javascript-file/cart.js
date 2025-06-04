

export let file = JSON.parse(localStorage.getItem('file'));

 if(!file){
  
  file = [{
  name: 'Onyeno Ikechukwu',
  remark: 'EXCELLENT1',
  comment: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
},
{
  name: 'Onyeno Ikechukwu',
  remark: 'GOOD2',
  comment: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
},
{
  name: 'Onyeno Ikechukwu',
  remark: 'BAD3',
  comment: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
}]

}
localStorage.setItem('file', JSON.stringify(file));




console.log(file);
