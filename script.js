window.onload = init;
   
function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            //
            let finished=document.createElement("button");
            finished.innerText="Marcar";

            let remove = document.createElement("button");
            remove.innerText="Eliminar";

            element.innerText = task;
            element.appendChild(finished);
            element.appendChild(remove);
            /*element.addEventListener("click", () => {
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            });*/
            element.addEventListener("click", function(){
               console.log(this);
               let parent = this.parentNode;
               if(parent){
                   parent.removeChild(this);
               }
            });
           // Añadir un boton para marcar de finalizado//
            finished.addEventListener("click", () => { 
                parent.style.textDecoration="line-through";
            });
           // Elimine de la lista//
           remove.addEventListener("click", function(){
            console.log(this);
            let parent = element.parentNode;
            if(parent){
                parent.removeChild(element);
            }
         });

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}


