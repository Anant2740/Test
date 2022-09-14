function validate (e){
    e.preventDefault();
    let source = document.querySelector("#source").value;
    let pipeline = document.querySelector("#pipeline").value;
    let project_name = document.querySelector("#project_name").value;
    let bucket_name = document.querySelector("#bucket_name").value;
    let cloud_storage = document.querySelector("#cloud_storage").value;
    let credentials = document.querySelector("#credentials").value;
    let every = document.querySelector("#every").value;

    // source
    if((source.trim().length < 5 )|| (source.search(/^[a-zA-Z][a-zA-Z0-9.,$;]+$/))){
        alert("Minimun length 5, No Special Character, Cannot Start with '-','_','+'")
        return;
    }
    // pipeline
    if((pipeline.trim().length < 5 )|| (pipeline.search(/^[a-zA-Z][a-zA-Z0-9.,$;]+$/))){
        alert("Minimun length 5, No Special Character, Cannot Start with '-','_','+'")
        return;
    }
    // project_name
    if((project_name.trim().length < 5 )|| (project_name.search(/^[a-zA-Z][a-zA-Z0-9.,$;]+$/))){
        alert("Minimun length 5, No Special Character, Cannot Start with '-','_','+'")
        return;
    }
    // bucket_name
    if((bucket_name.trim().length < 5 )|| (bucket_name.search(/^[a-zA-Z][a-zA-Z0-9.,$;]+$/))){
        alert("Minimun length 5, No Special Character, Cannot Start with '-','_','+'")
        return;
    }
    // cloud_storage
    if((cloud_storage.trim().length < 5 )|| (cloud_storage.search(/^[a-zA-Z][a-zA-Z0-9.,$;]+$/))){
        alert("Minimun length 5, No Special Character, Cannot Start with '-','_','+'")
        return;
    }
    // credentials
    if((credentials.trim().length < 5 )|| (credentials.search(/^[a-zA-Z][a-zA-Z0-9.,$;]+$/))){
        alert("Minimun length 5, No Special Character, Cannot Start with '-','_','+'")
        return;
    }
    // every
    if((every.trim().length < 5 )|| (every.search(/^[a-zA-Z][a-zA-Z0-9.,$;]+$/))){
        alert("Minimun length 5, No Special Character, Cannot Start with '-','_','+'")
        return;
    }
}

document.querySelector('#test1').addEventListener("submit", validate)