//Creacion del arreglo
let posts = [
    {
    autor: 'Marco',
    text: 'Este es el primer Blog.',
    fecha: 31/01/2021,
    categoria: ['general', 'F1'],
    },
    {
    autor: 'Karla',
    text: 'Este es el segundo blog.',
    fecha: 31/01/2021,
    categoria: ['general', 'Donde habitan los angeles'],
    },
]
//Creacion de post
const addPost = params => {
    const { posts=[], autor, text, fecha, categoria} = params
    //post
    
    //autor


    ///text


    //fecha
    let date = new Date();
    fecha: date;

    //Categoria
    const categoria = ({post, categoria, categoria1,categoria2}) =>{
    post[categoria].push(categoria1,categoria2);    
    }
    return posts
}