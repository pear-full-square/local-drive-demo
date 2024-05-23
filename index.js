import Localdrive from 'localdrive' 

const drive = new Localdrive('./my-localdrive')

console.log('Deleting existing files within ./my-localdrive ')
for await (const file of drive.list('/')) {
 console.log('Deleting ', file.key)
 await drive.del(file.key)
}

// Write a file all at once
console.log('Creating text file /blob.txt')
await drive.put('/blob.txt', Buffer.from('example'))

console.log('Creating executable /test.exe')
await drive.put('/test.exe', Buffer.from('   '),{ executable: true })

console.log('Creating some image files')
await drive.put('/images/logo.png', Buffer.from('..'))
await drive.put('/images/old-logo.png', Buffer.from('..'))

// Read a file all at once
const buffer = await drive.get('/blob.txt')
console.log('The binary contents of /blob.txt', buffer)

// list a file entry
console.log('The file entry details of /blob.txt')
const entry = await drive.entry('/blob.txt')
console.log(entry) 

// delete a file
console.log('Deleting /images/old-logo.png')
await drive.del('/images/old-logo.png')

// create a symlink
console.log('Creating shortcut /images/logo.shortcut')
await drive.symlink('/images/logo.shortcut', '/images/logo.png')

// list files in a folder
console.log('Listing the file contents within ./my-localdrive/images')
for await (const file of drive.list('/images')) {
    console.log('list', file) // => { key, value }
 }

 console.log('Listing the file contents within ./my-localdrive ')
 for await (const file of drive.list('/')) {
  console.log('list', file) // => { key, value }
}

// Read a file in chunks
console.log('Reading /blob.txt in chunks')
const rs = drive.createReadStream('/blob.txt')
for await (const chunk of rs) {
  console.log('rs', chunk) // => <Buffer ..>
}

// Write a file in chunks
console.log('Rewriting /blob.txt in chunks')
const ws = drive.createWriteStream('/blob.txt')
ws.write('new example')
ws.end()
ws.once('close', () => console.log('file saved'))
