export function selectBook(book){

    //console.log('my book is' +  book.title);
    return{
        // selectBook e' un creatore di azioni ActionCreator deve restituire un azione
        // un oggetto con proprieta' type
        type:'BOOK_SELECTED',
        payload:book // questo non sempre richiesto
    }
}