//warning
console.warn("Warning")
//table log
console.table([
    {"first":"first ",
     "second": "second"
 },
 {"first":"first ",
 "second": "second"
},
{"first":"first ",
"second": "second"
},
])
//console group log
console.group("Group Label")
console.info('first')
console.info('second')
console.info('third')
console.group("Nested Group Label")
console.info('first')
console.info('second')
console.info('third')
console.groupEnd("Nested Group Label")
console.info('fourth')
console.info('fifth')
console.info('sixth')
console.groupEnd("Group Label")
//console custom css messages
const styles = `
background-color: red;
color: black;
padding: 4px;
border-radius: 4px;
`;
console.log('%cStyled Log', styles);
//