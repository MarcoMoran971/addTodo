//Se declara la lista con sus categorias

let list= {
  
  alumnos:[],
  grado:[]
  
}

//Elementos de las categorias

list.alumnos.push('Marco','Karla')
list.grado.push('6to','8vo')


//Agregar un elemento

const addTodo = ({list,key,newValue}) =>{

//Decision de cateria existente o inexistente
 
if( list[key] ) {
 list[key].push(newValue);
}
else{
 console.log ("No se encuentra esa categoria")
}
return list
  }


//Editar el elemento de un arreglo

const editTodo = ({list,key,index,newValue}) =>{

//Desicion de key

if (list[key]) {

  if (list[key][index]) {
  list[key][index]=newValue;
  } 
  else { 
   alert ("No se encuentra ese Valor")
  }
} 
else {
  alert ("No se encuentra esa Categoria")
}
 return list
}


//Eliminar elementos de un arreglo

const deleteTodo = ({list,key,index}) =>{

//Desicion de Key
if (list[key]) {

  if (list[key][index]) {
 list[key].splice(index,1)
  } 
  else { 
   alert ("No se encuentra ese Valor")
  }
} 
else {
  alert ("No se encuentra esa Categoria")
}
 return list
}



//Eliminar un arreglo con sus elementos

const deleteCategory = ({list,key}) =>{

//Desicion de key

if (list[key]) {
  delete list[key]
} 
else {
  alert ("No se encuentra esa Categoria")
}
 return list
}


//agregar categoria
 const addCategory = ({list,key,newValue}) =>{
list[key] = [newValue]
return list
}