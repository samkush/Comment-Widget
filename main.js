// var log_usr = document.getElementById("log-usr").value;
// var log_psw = document.getElementById("log-psw").value;

// var sign_usr = document.getElementById("sign-usr").value;
// var sign_psw = document.getElementById("sign-psw").value;


// class comments{

//     constructor(){
//         if(login() === true){
//             //allow for comment
//             comment();
//         }else{
//             //first log in or check it is a member or not 
//             if(exists() === true){
//                 //log in
//                 login();
//             }else{
//                 //sign up
//                 signup();
//             }
//         }
//     }

//     login(){
//         //if login's username and password matches then login
//         if(exists() === true ){
//             alert('login')
//             // a div will appear on the top-right corner with matching name from database 
//         }else{
//             alert('not found');
//             document.getElementById('modal-wrapper').style.display='none';
//             document.getElementById('modal-wrapper-2').style.display='block';
//             //member not found, redirect to signup
//             // redirect to ----> signup page
//         }
//     }

//     signup(){
//         //user firstly sign up means tha data is stored in array
//         //close signup page
//         //then is must be logged in 
//         // and allow for commenting
//         // save value to database 
//         // save two values 1.username and  2.password
//     }

//     exists(){
//         //check member is exists or not
//         for(i=0;i<10;i++){
//             if(log_usr === login_username[i] && log_psw === login_password[i]){
//                 return(true);
//             }else{
//                 return(false);
//             }
//         }
//     }

//     comment(){
//         //fetch name from database which is currently logged in
//         //save current time after add reply btn press 
//         //save message
//     }


//     /*********************** reply  **********************/
//     reply(){
//         //redirect to ----> login page
//         if(member.exists() === true){
//             login();
//         }else{
//             //redirect to ----> signup page
//             signup();
//         }
//         //create a new div same as comment box
//         comment();
//     }
// }




let member;
let comment_message;
let comment_boxes = document.getElementById("comment-boxes");
var wrapper = document.createElement('div');


function store_btn_click(){
if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        }else{
            localStorage.clickcount = 1;
        }
    }
}



function last_login_member(member){
    localStorage.setItem('last_login_member', member);
}


function show_div(){

//*********************************   showing save comments *****************************//    
    if(localStorage != null){
        for(var i=1, len=localStorage.length; i<=len; i++) {
            for(var j=1, len=localStorage.length; j<=len; j++) {
                var key = localStorage.key(j-1);
                var value = localStorage[key];
                if(key == `div ${i}`){
                    var d1 = document.getElementById('comment-boxes');
                    d1.insertAdjacentHTML('beforeend', value);
                }
            }
        }


       
//*********************************   showing login member name on top-right corner *****************************//    
    if(localStorage['last_login_member'] != null)
        document.getElementById('fetch-username-after-login').innerHTML = localStorage['last_login_member'];
    }

//*********************************   showing likes and dislikes after reload*****************************//    
    for( let m = 1; m<=localStorage.clickcount; m++){
            document.getElementById(m).innerHTML = localStorage[`like ${m}`];
            if(localStorage[`like ${m}`] != 0){
                document.getElementById(m).style.color = 'black';
            }
            document.getElementById(`d${m}`).innerHTML = localStorage[`dislike ${m}`];
            if(localStorage[`dislike ${m}`] != 0){
                document.getElementById(`d${m}`).style.color = 'black';
            }
        }

   
}

function like(like_id){
    for(let k =1; k<= localStorage.clickcount; k++){
        if(like_id == k ){
            let found;
            console.log(localStorage['last_login_member']);
            console.log(like_id);
            let searching_name = `${localStorage['last_login_member']} like ${like_id}`;
            console.log(searching_name);
            for(let v=0; v<localStorage.length; v++){
                if(localStorage.key(v) == searching_name){
                    console.log('if k ander' + localStorage.key(v));
                    found = 1; 
                }else{
                    continue;
                }
            }
            if(found == 1){
                alert('you liked it already');
            }else{
                localStorage.setItem(searching_name,searching_name);
                document.getElementById(like_id).style.color = 'black';
                localStorage[`like ${k}`,  localStorage[`like ${k}`] = Number(localStorage[`like ${k}`]) + 1];
                document.getElementById(like_id).innerHTML = localStorage[`like ${k}`];
            }
        }
    }
}

function dislike(dislike_id){
    for(let z =1; z<= localStorage.clickcount; z++){
        if(dislike_id == `d${z}` ){
            let found;
            let searching_name = `${localStorage['last_login_member']} like ${dislike_id}`;
            for(let v=0; v<localStorage.length; v++){
                if(localStorage.key(v) == searching_name){
                    found = 1; 
                }else{
                    continue;
                }
            }
            if(found == 1){
                alert('you disliked it already');
            }else{
                localStorage.setItem(searching_name,searching_name);
                document.getElementById(dislike_id).style.color = 'black';
                localStorage[`dislike ${z}`,  localStorage[`dislike ${z}`] = Number(localStorage[`dislike ${z}`]) + 1];
                document.getElementById(dislike_id).innerHTML = localStorage[`dislike ${z}`];
            }
        }
    }
}


function exists(){
    let signup_username = ['r',"Rhythm", "Manthan", "Nilay", "Aalind", "Akshu", "Rudra"];
    let signup_password = ['r','123','123','123','123','123','123'];
    let log_usr = document.getElementById("log-usr").value;
    let log_psw = document.getElementById("log-psw").value;
    

        if(signup_username.indexOf(log_usr) > -1 && signup_password.indexOf(log_psw) > -1 ){ //that was blunder!  ---> arrayname.indexOf('string to be searched in array') ---> it checks if string exists or not if yes then retuen 0 else -1  
            alert('found');
            member = log_usr;
            return(true);
        }else{
            alert('not found');
            return(false);
        }
}

function login(){
        //if login's username and password matches then login
        if(exists() === true ){
            //change div with login member information
            document.getElementById('modal-wrapper').style.display='none';
            document.getElementById('fetch-username-after-login').innerHTML = member;
            document.getElementById("message-box-comments").innerHTML = "";
            // enter message in message box //
            document.getElementById('message-box-popup').style.display='block'
        }else{
            document.getElementById('modal-wrapper').style.display='none';
            document.getElementById('modal-wrapper-2').style.display='block';
            //member not found, redirect to signup
            // redirect to ----> signup page
        }
    }

function signup(){ 

    sessionStorage.setItem("name", JSON.stringify(signup_username));
    var retrievedname = sessionStorage.getItem("name");
    var retrievedname = JSON.parse(retrievedname);
    
    sessionStorage.setItem("psw", JSON.stringify(signup_password));
    var retrievedpsw = sessionStorage.getItem("psw");
    var retrievedpsw = JSON.parse(retrievedpsw);

    alert(retrievedname.length);
}

function Add_comment(){


    /////********************************** Storing add btn clicks ****************************////////
    store_btn_click();
    /////////********************************************************************/////////////////
    comment_message = document.getElementById("message-box-comments").value;
 
    document.getElementById('message-box-popup').style.display='none';
    console.log(comment_message);

    /////********************************** clone sample div  ****************************////////
    
    let clone =  document.getElementsByClassName("comment-box-class")[0];
    clone = clone.outerHTML;

    // comment_boxes.appendChild(clone);
    var c1 = document.getElementById('comment-boxes');
    c1.insertAdjacentHTML('beforeend', `${clone}`);

    /////********************************** changing comment-username-after-login  ****************************////////
    let comment_name_class = document.getElementsByClassName("comment-name-class")[localStorage.clickcount]
    comment_name_class.innerHTML = member;


    /////********************************** changing comment-message-after-login  ****************************////////
    let comment_message_class = document.getElementsByClassName("row2")[localStorage.clickcount]
    comment_message_class.innerHTML = comment_message;

    /////********************************** create variables for like and dislike  ****************************////////
    document.getElementsByClassName('fetch-like-count')[localStorage.clickcount].id = localStorage.clickcount;
    document.getElementsByClassName('fetch-dislike-count')[localStorage.clickcount].id = 'd' + localStorage.clickcount;


    /////********************************** saving member name in localStorage  ****************************////////
    last_login_member(member);


    /////********************************** saving the shit differently  ****************************////////
    d = document.getElementsByClassName("comment-box-class")[localStorage.clickcount];
    
    localStorage.setItem(`div ${localStorage.clickcount}`, `${d.outerHTML}`);



    /////********************************** like and dislike ****************************////////
    localStorage.setItem(`like ${localStorage.clickcount}`, 0);
    localStorage.setItem(`dislike ${localStorage.clickcount}`, 0);


    /////********************************** reload page  ****************************////////    
    location.reload();

}

