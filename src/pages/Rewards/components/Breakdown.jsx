import React, { useEffect, useState } from 'react'
import Statistics from '../../../services/Statistics'

function Breakdown({ onLoading }) {
  const [list, setList] = useState({})

  const statisticBreakdown = () => {
    onLoading(true)
    Statistics.getBreakdown()
      .then((res) => {
        if (res.isOk) {
          setList(res.data)
        }
      })
      .catch(() => {})
      .finally(() => onLoading(false))
  }

  useEffect(() => {
    statisticBreakdown()
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>Match</th>
            <th>Points</th>
            <th>Boosted Point</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="p-2">
                <div className="text-lg font-semibold">Win a match </div>
                <div className="text-[12px]">Earn 10 points per match </div>
              </div>
            </td>
            <td className="text-center align-middle">
              {list?.winning_matches?.matches}
            </td>
            <td className="text-center align-middle">
              {list?.winning_matches?.points}
            </td>
            <td className="text-center align-middle">
              {list?.winning_matches?.boosted_points}
            </td>
            <td className="text-center align-middle">
              {list?.winning_matches?.total_points}
            </td>
          </tr>
          <tr>
            <td>
              <div className="p-2">
                <div className="text-lg font-semibold">Play 10 matches</div>
                <div className="text-[12px]">
                  Earn 10 points by playing 10 matches. Once per day
                </div>
              </div>
            </td>
            <td className="text-center align-middle">
              {list?.ten_matches?.matches}
            </td>
            <td className="text-center align-middle">
              {list?.ten_matches?.points}
            </td>
            <td className="text-center align-middle">
              {list?.ten_matches?.boosted_points}
            </td>
            <td className="text-center align-middle">
              {list?.ten_matches?.total_points}
            </td>
          </tr>
          <tr>
            <td>
              <div className="p-2">
                <div className="text-lg font-semibold">Play 20 matches</div>
                <div className="text-[12px]">Earn 20 points per match </div>
              </div>
            </td>
            <td className="text-center align-middle">
              {list?.twenty_matches?.matches}
            </td>
            <td className="text-center align-middle">
              {list?.twenty_matches?.points}
            </td>
            <td className="text-center align-middle">
              {list?.twenty_matches?.boosted_points}
            </td>
            <td className="text-center align-middle">
              {list?.twenty_matches?.total_points}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Breakdown
