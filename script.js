function changeQoute(){
    let qoutes = {
       "- Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
       "- Pierce Brown" : '“Man cannot be freed by the same injustice that enslaved it.”',
       "-Madeline Miller": '“Bury us, and mark our names above. Let us be free.”'

    }

    let authors = Object.keys(qoutes);
    let author = authors[Math.floor(Math.random() * authors.length)];

    let qoute = qoutes[author];

    document.getElementById("qoutes").innerHTML = qoute;
    document.getElementById("author").innerHTML = author;

}