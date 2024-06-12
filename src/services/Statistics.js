import http from '.'
import {
  apiStatisticsBreakdown,
  apiStatisticsLeaderboard,
  apiStatisticsRefferdUsers,
} from './apiRouter'

const getBreakdown = () => http.get(apiStatisticsBreakdown)
const getStatisticsRefferedUsers = () => http.get(apiStatisticsRefferdUsers)
const getLeaderboard = () => http.get(apiStatisticsLeaderboard)

const Statistics = {
  getBreakdown,
  getStatisticsRefferedUsers,
  getLeaderboard,
}

export default Statistics
