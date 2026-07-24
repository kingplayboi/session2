export async function saveSession(creds) {
  const encoded = Buffer.from(JSON.stringify(creds)).toString('base64');
  return `ISAAC-MD:~${encoded}`;
}
