export default{
	path:"/header",
	component:()=>import('../../views/header/index.vue'),
	children:[
	   {
		   path:"system",
		   component:()=>import('../../components/wz/system/system.vue'),
	   }
   ]
}