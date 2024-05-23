import Localdrive from 'localdrive' 
//const Localdrive = require('localdrive')

const drive = new Localdrive('./my-project')

await drive.put('/blob.txt', Buffer.from('example'))
await drive.put('/images/logo.png', Buffer.from('..'))
await drive.put('/images/old-logo.png', Buffer.from('..'))

const buffer = await drive.get('/blob.txt')
console.log(buffer) // => <Buffer ..> 'example'

const entry = await drive.entry('/blob.txt')
console.log(entry) // => { key, value: { executable, linkname, blob, metadata } }

await drive.del('/images/old-logo.png')

await drive.symlink('/images/logo.shortcut', '/images/logo.png')


for await (const file of drive.list('/images')) {
    console.log('list', file) // => { key, value }
  }

  for await (const file of drive.list('/')) {
    console.log('list', file) // => { key, value }
  }
    

const rs = drive.createReadStream('/blob.txt')
for await (const chunk of rs) {
  console.log('rs', chunk) // => <Buffer ..>
}

const ws = drive.createWriteStream('/blob.txt')
ws.write('new example')
ws.end()
ws.once('close', () => console.log('file saved'))

