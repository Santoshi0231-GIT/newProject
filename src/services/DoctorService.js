// const API_BASE = import.meta.env.VITE_API_URL || '';

// function cleanUrl(url) {
//   return url.replace(/\/+$/, ""); // remove trailing slash
// }


// export async function getDoctors() {
//   if (!API_BASE) return;

//   try {
//     const res = await fetch(`${cleanUrl(API_BASE)}/Doctor`, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" }
//     });

//     const data = await res.json().catch(() => ({}));

//     if (!res.ok) {
//       const message = data.message || data.error || `Server error ${res.status}`;
//       throw new Error(message);
//     }

//     return data;
//   } catch (err) {
//     console.warn("getDoctors: API call failed →", err.message);
//     throw err;
//   }
// }


// export async function addDoctor(doctor) {
//   if (!API_BASE) return;

//   try {
//     const res = await fetch(`${cleanUrl(API_BASE)}/Doctor/post_doctor_create`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(doctor),
//     });

//     const data = await res.json().catch(() => ({}));

//     if (!res.ok) {
//       const message = data.message || data.error || `Server error ${res.status}`;
//       throw new Error(message);
//     }

//     return data;
//   } catch (err) {
//     console.warn("addDoctor: API call failed →", err.message);
//     throw err;
//   }
// }

// export default {
//   getDoctors,
//   addDoctor,
// };
