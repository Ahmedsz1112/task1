        
        let counterEl = document.querySelectorAll(".counter");
        let section = document.querySelector(".three");
        let btn = document.querySelector("button.btn-bottom");
        let started = false;

        window.onscroll = function(){
            if(window.scrollY >= section.offsetTop){
                if(!started){
                counterEl.forEach((el) => count(el));
                }
                started = true;
            }
        }

        function count(el){
            let goal = el.dataset.goal;
            let counter = setInterval(() => {
                el.textContent++ + "+";
                if(el.textContent == goal){
                    clearInterval(counter)
                }
            }, 20)
        };

        window.addEventListener("scroll", () => {
            if(window.scrollY >= 300){
                btn.classList.add("show")
            }else {
                btn.classList.remove("show")
            }
        } );

        btn.addEventListener("click", () => {
            let heigth = document.body.scrollHeight;
            window.scroll(0 ,heigth)
        });
            

