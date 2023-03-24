import httpRequestDetails from "./basicUrlAxios";
export async function createContact(contact) {
  return await httpRequestDetails.post("/contacts", contact);
}
export async function getAll() {
  return await httpRequestDetails.get("/contacts/my-contacts");
}
export async function deleteContact(id) {
  return await httpRequestDetails.delete(`/contacts/${id}`);
}
export async function updateContact(id, contact) {
  return await httpRequestDetails.put(`/contacts/${id}`, contact);
}
export async function getSpecificContact(id) {
  return await httpRequestDetails.get(`/contacts/${id}`);
}
const contactServices = {
  createContact,
  getAll,
  deleteContact,
  updateContact,
  getSpecificContact,
};
export default contactServices;
