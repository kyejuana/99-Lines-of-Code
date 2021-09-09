let friends = ["Tristan ", "Chris ", "Rose ", "Annie ", "Nikki "]
for (let num = 99; num > 0; num--) {
    
    
    for (let i = 0; i < friends.length; i++) {
        
        
        if (num > 2) {
            console.log(num  + " lines of code on the screen," + num + " lines of code..." + friends[i] + "strikes one out, clears it all out," + (num - 1) + " lines of code in the file.");
        } else if (num == 2) {
            console.log(num + " lines of code on the screen," + num + " lines of code..." + friends[i] + "strikes one out, clears it all out," + (num - 1) + " line of code in the file.");    
        } else if (num == 1) {
            console.log(num + " line of code on the screen," + num + " line of code..." + friends[i] + "strikes one out, clears it all out, no more lines of code in the file.")
        }
        
    }
    
}