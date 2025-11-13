const API_BASE=import.meta.env.VITE_API_URL||''
    export async function registerUser(user){
        if(API_BASE){try {
            const res=await fetch(`${API_BASE.replace(/\/$/,'')}/user/register`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(user),
            })
            const data=await res.json().catch(()=>({}))
            if(!res.ok){
                const message=data.message|| data?.error||`Server error${res.status}`
                throw new Error(message)
            }
            return data
        } catch (error) {
            console.warn('registerUser:API call failed',error.message)
        }}
    }