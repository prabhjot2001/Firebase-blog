export const hiddenEmail = (email) =>{
  const [username, domain] = email.split('@')
  const secretUser = username.substring(0,2) + '*'.repeat(username.length-2)
//getting first 2 character + (adding) * as many times as length of username-2 because we already slice 2 character at the begin
  return `${secretUser}@${domain}`
}