<template>
   <div class="project" :class="{activeCompleted:user.completed}">
       <div class="actions" >
           <h3 @click="showDeadLine=!showDeadLine" >{{user.title}}</h3>
           <div class="icons"> 
                <span class="material-icons" @click="toggleComplete">
                    done
                </span>
                <span class="material-icons" @click="deleteUser">
                 delete
              </span>
                 <router-link :to="{name:'editproject',params:{id:user.id}}">
                  <span class="material-icons">
                   edit
                 </span>
                 </router-link>
           </div>
       </div>
       <div class="deadline" v-if="showDeadLine">
           <p>{{user.deadline}}</p>
           
       </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['user'],
    name:'SingleProjct',

    data(){
        return{
            showDeadLine:false,
            url:'http://localhost:3000/projects/'+this.user.id 
        }
    },
    methods:{
     async deleteUser(){
          await  axios.delete(this.url)
           this.$emit('delete', this.user.id)
        },

        async toggleComplete(){
            await axios.patch(this.url,
             {completed:!this.user.completed}
            
            )
             this.$emit('complete',this.user.id)
        }
    }
}
</script>

<style scoped>
.project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 10px solid #e90074;
  }
  h3 {
    cursor: pointer;
  }
  .actions{
      display: flex;
      justify-content: space-around;
      align-items: center;
  }
  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-icons:hover {
    color: #777;
  }
  .activeCompleted{
      border-left: 10px solid green;
  }
</style>