// @ts-nocheck
 export default class Book {
  constructor({title,author,pages,isRead}) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.date = this.getDate();
    this.uid = this.generateID(); 
  }
  getDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return dd + '/' + mm + '/' + yyyy;
  }

  generateID() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }
}