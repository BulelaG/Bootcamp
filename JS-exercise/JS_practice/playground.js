let fullnames = [
    {
     name:"John",
     lastname:"Doe"
    },
     {
       name:"Jane",
     lastname:"Doeee"  
    },
    {
      name:"Peter",
     lastname:"Parker"   
    }
    ]
    
    const firstnames = fullnames.map(person => person.name);


    console.log(firstnames)

    for (let person of fullnames){
        console.log(person.lastname)
    }

    for(l = 0; l <firstnames.length;l++){
      console.log(firstnames[l])}