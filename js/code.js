const var1Box = $('#j-var1');
const var2Box = $('#j-var2');
const var3Box = $('#j-var3');
const var4Box = $('#j-var4');
const var5Box = $('#j-var5');
const var6Box = $('#j-var6');
const speachBox = $('#j-speach');
const btnCreate = $('.btn-create');
const btnReplace = $('.btn-replace');
const textBox = $('#result');

const createObj = {
  "text":[
    "Жили-были {var1} да {var2}. И ",
    "была у них {var3}. ",
    "Снесла {var3} {var4}, да не простое - золотое. ",
    "{var1} бил, бил - не разбил. ",
    "{var2} била, била - не разбила. ",
    "А {var5} бежала, {var6} задела, {var4} упало и разбилось. ",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет: ",
    "{speach}"
  ]
};

btnCreate.click(function() {
  textBox.html(createObj.text);
})

btnReplace.click(function() {
  const var1 = var1Box.val();
  const var2 = var2Box.val();
  const var3 = var3Box.val();
  const var4 = var4Box.val();
  const var5 = var5Box.val();
  const var6 = var6Box.val();
  const speach = speachBox.val();
    
  const replaceObj = {
    "text":[
      `Жили-были ${var1} да ${var2}. И `,
      `была у них ${var3}. `,
      `Снесла ${var3} ${var4}, да не простое - золотое. `,
      `${var1} бил, бил - не разбил. `,
      `${var2} била, била - не разбила. `,
      `А ${var5} бежала, ${var6} задела, ${var4} упало и разбилось. `,
      `${var1} плачет, ${var2} плачет, а ${var3} кудахчет: `,
      `${speach}`
    ]
  };
  
    
  textBox.html(replaceObj.text);
})