/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Statistics from '../../../services/Statistics'
import { LeaderBoardWrapper } from '../styled'

function TopRanking({ onLoading }) {
  const [list, setList] = useState({})

  const getLeaderBoard = () => {
    onLoading(true)
    Statistics.getLeaderboard()
      .then((res) => {
        if (res.isOk) {
          console.log(res.data)
          setList(res.data)
        }
      })
      .catch(() => {})
      .finally(() => onLoading(false))
  }

  useEffect(() => {
    getLeaderBoard()
  }, [])
  return (
    <LeaderBoardWrapper>
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Name</th>
            <th>Match Points</th>
            <th>Boosted Point</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b border-black p-2 text-center">
              #{list?.me?.rank}
            </td>
            <td className="border-b border-black p-2 text-center">
              {list?.me?.fullname}
            </td>
            <td className="border-b border-black p-2 text-center">
              {list?.me?.points}
            </td>
            <td className="border-b border-black p-2 text-center">
              {list?.me?.boosted_points}
            </td>
            <td className="border-b border-black p-2  text-center">
              {list?.me?.total_points}
            </td>
          </tr>
          {list?.leaderboard?.map((item, idx) => {
            return (
              <tr key={idx}>
                <td className="p-2 text-center">#{item?.rank}</td>
                <td className="p-2 text-center">{item?.fullname}</td>
                <td className="p-2 text-center">{item?.points}</td>
                <td className="p-2 text-center">{item?.boosted_points}</td>
                <td className="p-2 text-center">{item?.total_points}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </LeaderBoardWrapper>
  )
}

export default TopRanking
