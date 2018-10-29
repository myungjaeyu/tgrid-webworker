import { WorkerConnector } from 'tgrid/protocol/worker'
import { Driver } from 'tgrid/base'

import IExam from './internal/IExam'

async function main() : Promise<void> {

    const worker = new WorkerConnector()
    await worker.connect('./bin/worker-server.js')

    const exam : Driver<IExam> = worker.getDriver<IExam>()


    console.log(await exam.send('u4bi'))

    await worker.close()
}

main()
.catch(err => console.log('err', err))