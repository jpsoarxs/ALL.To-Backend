import * as path from 'path'
import moduleAlias from 'module-alias'

const files = path.resolve(__dirname, '../..')

moduleAlias.addAliases({
    '@src': path.join(files, './src'),
    '@modules': path.join(files, './src/app/modules'),
    '@services': path.join(files, './src/app/services'),
    '@dto': path.join(files, './src/app/dto'),
    '@util': path.join(files, './src/util')
})