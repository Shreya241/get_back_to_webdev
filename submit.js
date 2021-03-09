var form=document.getElementById("name-form");
            form.onsubmit = function(e) {
                e.preventDefault();
                var result=document.getElementById("result");
                result.innerHTML = "Hi " + form.name.value +" Your response has been taken";
                this.reset();
            };