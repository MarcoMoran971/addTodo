//Arreflo que contiene todos los post
let posts= []
//Creacion del orimer post
let post = 
    {
    autor: 'Marco',
    text: 'Este es el primer Blog.',
    fecha: Date(),
    categoria: ['Musica', 'F1'],
    }

    let post1 = 
    {
    autor: 'Karla',
    text: 'Este es el segundo Blog.',
    fecha: Date(),
    categoria: ['Libros', 'Musica'],
    }

    let post2 = 
    {
    autor: 'Raul',
    text: 'Este es el tercer Blog.',
    fecha: Date(),
    categoria: ['Informatica', 'Programacion'],
    }
    
//Creacion de post
const addPost = params => {
    const { posts=[], autor, text, fecha, categoria} = params
    posts.push({autor, text, fecha, categoria});
    return posts
   }

//Editar post
const editPost = params => {
const { posts=[], autor, text, fecha, categoria, index} = params
if (posts[index]) {
    posts [index]= ({autor,text,fecha,categoria})
    } else { 
        alert ('El valor del index no existe')
      }
  return posts
}

//Eliminar un post
const deletePost = params => {
    const { posts=[], index } = params
    if(posts[index]){
        delete posts[index]
    }
    else{
        alert ('El valor del index no existe')
    }
    return posts
    }

//Mostrar un post
    const getPost = params => {
        const {posts= [], index} = params
        if(posts[index]){
            console.log (posts[index])
        }
       else{
        alert ('El valor del index no existe')
       }
        return posts
        }  

 //Ordenar posts por autor
 const sortPostsAutor = params => {
    const {posts = [], key} = params

    posts.sort(function (a,b,key = 'autor') {
        if (a[key] > b[key]) {
           return 1 
        }
        if (a[key] < b[key]) {
            return -1
        }
        return 0
    })
    return posts


    }    

     //Ordenar posts por fecha
 const sortPostsDate = params => {
    const {posts = [], key} = params

    posts.sort(function (date1,date2,key = 'fecha') {
        if (date1[key] > date2[key]) {
           return 1 
        }
        if (date1[key] < date2[key]) {
            return -1
        }
        return 0
    })
    return posts
    }   

    //Filtros de post
    const filterPosts = params => {
        const {posts = [], categoria = []} = params

        return posts.filter(post => {
        for (let index = 0, lt = categoria.length; index < lt; index++) {
        const category = categoria[index]
        if (post.categoria.includes(category)) {
        return post
        }
        }
        })
        }