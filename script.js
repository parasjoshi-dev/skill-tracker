const skillInput = document.querySelector("#skillInput");
const categoryInput = document.querySelector("#categoryInput");
const addBtn = document.querySelector("#addBtn");

const skillContainer = document.querySelector("#skillContainer");

const message = document.querySelector("#message");

const totalSkills = document.querySelector("#totalSkills");
const completedSkills = document.querySelector("#completedSkills");
const learningSkills = document.querySelector("#learningSkills");

const searchInput = document.querySelector("#searchInput");

addBtn.addEventListener("click",function () {

    const skill = skillInput.value.trim();

    const category = categoryInput.value;
  
    if (skill==="")
        {
              message.textContent= "please enter a skill";
              return;
        }
 
        if(category ===""){
            message.textContent= "please select a category";
            return;
        }


        const skillCard = document.createElement("div");

        skillCard.classList.add("skill-card");

        const skillName = document.createElement("h3");

        skillName.textContent = skill;

        const skillCategory = document.createElement("p");

        skillCategory.textContent = category;

        const skillStatus = document.createElement("p");

        skillStatus.textContent = "learning";

        skillCard.appendChild(skillStatus);

        skillCard.appendChild(skillName);

        skillCard.appendChild(skillCategory);

   
     skillContainer.appendChild(skillCard);

     let totalCount = 0;
     let completedCount =0;
     let learningCount =0;

     const totalSkills = document.querySelector("#totalSkills");

     const completedSkills = document.querySelector("#completedSkills");

     const learningSkills = document.querySelector("#learningSkills");

     totalCount++;
     learningCount++;

     totalSkills.textContent = totalCount;

     learningSkills.textContent = learningCount;

    skillInput.textContent=totalCount;

    learningSkills.textContent=learningCount;



       const statusBtn = document.createElement("button");

       statusBtn.textContent = "Mark complete";

       statusBtn.addEventListener("click", function() {

      if(skillStatus.textContent==="Learning")
        {
           skillStatus.textContent="Completed";
           statusBtn.textContent = "Mark as Learning ";
           
           skillCard.classList.add("Completed");
        }

        else {
            skillStatus.textContent = "Learning";
            statusBtn.textContent = " Mark as complete";

            skillCard.classList.remove("Completed");
        }

        
       });

    skillCard.appendChild(statusBtn);

   const deleteBtn = document.createElement("button");
   
   deleteBtn.textContent = "Delete";

   deleteBtn.addEventListener("click", function() {
    totalCount--;

    if(skillStatus.textContent==="completed"){
        completedCount--;
    }
     else{
        learningCount--;
     }
      totalSkills.textContent=totalCount;
      completedSkills.textContent=completedCount;
      learningSkills.textContent=learningCount;

      skillCard.remove();

   });

    skillCard.appendChild(deleteBtn)
});