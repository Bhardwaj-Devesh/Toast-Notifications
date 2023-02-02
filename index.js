const buttons=document.querySelectorAll(".btn");
const notifications=document.querySelector(".notifications");
const toastobj={
    timer:5000,
    success: {
        icon : 'fa-circle-check',
        text : 'Success : This is a success Toast',
    },
    error :{
        icon: 'fa-circle-xmark',
        text: 'Error : This is a Error Toast',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text:'Warning: This is a warning toast',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Info : This is a Info toast',
    }

}

const removeToast=(toast)=>{
    toast.classList.add("hide");
    setTimeout(()=>toast.remove(),500);
}

const notify =(id)=>{
    const {icon, text} =toastobj[id];
    const toast=document.createElement("li");
    toast.classList.add("toast");
    toast.classList.add(`${id}`);
    toast.innerHTML=`<div class="column">
                        <i class="fa-solid ${icon}"></i>
                        <span>${text}</span>
                    </div>
                    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`
    notifications.appendChild(toast);
    setTimeout(()=>removeToast(toast),toastobj.timer);
}

buttons.forEach(btn=>{
    btn.addEventListener("click", ()=> notify(btn.id));
});