import React, { useEffect, useState } from 'react'
import Statistics from '../../../services/Statistics'

function Referral({ onLoading }) {
  const [list, setList] = useState({})

  const statisticRefferedUser = () => {
    onLoading(true)
    Statistics.getStatisticsRefferedUsers()
      .then((res) => {
        if (res.isOk) {
          setList(res.data)
        }
      })
      .catch(() => {})
      .finally(() => onLoading(false))
  }

  useEffect(() => {
    statisticRefferedUser()
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> </th>
            <th>Referred users</th>
            <th>Referred points</th>
            <th>Total earned</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="p-2">
                <div className="text-lg font-semibold">Referral </div>
                <div className="text-[12px]">
                  Earn 10% of total points from referred user{' '}
                </div>
              </div>
            </td>
            <td className="text-center">{list?.referred_users}</td>
            <td className="text-center">{list?.referred_points}</td>
            <td className="text-center">{list?.total_points}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Referral
