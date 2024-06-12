import React, { useEffect, useState } from 'react'
import Statistics from '../../../services/Statistics'
import { Spin } from 'antd'

function Breakdown() {
  const [loading, setLoading] = useState(false)

  const statisticBreakdown = () => {
    setLoading(true)
    Statistics.getBreakdown()
      .then((res) => {
        if (res.isOk) {
          console.log(res.data)
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    statisticBreakdown()
  }, [])

  return (
    <Spin spinning={loading}>
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
                <div>
                  <div>Win a match </div>
                  <div className="text-[12px]">Earn 10 points per match </div>
                </div>
              </td>
              <td className="text-center align-middle">125</td>
              <td className="text-center align-middle">3,000,000</td>
              <td className="text-center align-middle">3,000,000</td>
              <td className="text-center align-middle">6,000,000</td>
            </tr>
            <tr>
              <td>
                <div>
                  <div>Play 10 matches</div>
                  <div className="text-[12px]">
                    Earn 10 points by playing 10 matches. Once per day
                  </div>
                </div>
              </td>
              <td className="text-center align-middle">125</td>
              <td className="text-center align-middle">3,000,000</td>
              <td className="text-center align-middle">3,000,000</td>
              <td className="text-center align-middle">6,000,000</td>
            </tr>
            <tr>
              <td>
                <div>
                  <div>Play 20 matches</div>
                  <div className="text-[12px]">Earn 20 points per match </div>
                </div>
              </td>
              <td className="text-center align-middle">125</td>
              <td className="text-center align-middle">3,000,000</td>
              <td className="text-center align-middle">3,000,000</td>
              <td className="text-center align-middle">6,000,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Spin>
  )
}

export default Breakdown
