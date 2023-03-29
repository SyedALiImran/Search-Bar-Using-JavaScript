function search(){

    let filterKeyword = document.getElementById("searchKeyword").value.toUpperCase();
    
    

    let tabel = document.getElementById("table");

    let tableRow = tabel.getElementsByTagName("tr");

    for(var i = 0; i<tableRow.length; i++){
    let td = tableRow[i].getElementsByTagName("td")[0];
    
    if(td){
        let textValue = td.textContent;

        if(textValue.toUpperCase().indexOf(filterKeyword)>-1){
            tableRow[i].style.display = "";
        }else{
            tableRow[i].style.display = "none";
        }
        
    }
    
    }

}