 let k=true;
 let sc=Number(k)
console.log(typeof(sc),sc)
/*"33"->33
"33abc"->nan
"33"->33
""->0
"null"->nan
"undefined"->nan
"true"->nan
"false"->nan
" "->0
"  33  "->33
"  33abc  "->nan
true->1
false->0
null->0

*/
let p=" "
let toboolean=Boolean(p)
console.log(typeof(toboolean),toboolean)
/* boolean false 
0->false
1->true
""->false
" "->true
"kartik"->true
null->false
undefined->false
nan->false
[]->true
[1,2]->true
*/
let o=undefined
let tostring=String(o)
console.log(typeof(tostring),tostring)
/* string "44"
44->"44"
0->"0"
1->"1"
""->""
" "->" "
"kartik"->"kartik"
null->"null"
undefined->"undefined"
nan->"nan"
[]->""
[1,2]->"1,2"
*/
