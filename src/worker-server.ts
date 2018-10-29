import { WorkerServer } from 'tgrid/protocol/worker'
import Exam from './internal/Exam'

export default new WorkerServer(new Exam())