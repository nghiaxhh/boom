import React from 'react'

function TopRanking() {
  return (
    <div>
      <table>
        <tr>
          <th>Ranking</th>
          <th>Name</th>
          <th>Match Points</th>
          <th>Boosted Point</th>
          <th>Total</th>
        </tr>

        <tr>
          <td>1</td>
          <td className="text-center">Lucia</td>
          <td className="text-center">3,000,000</td>
          <td className="text-center">3,000,000</td>
          <td className="text-center">6,000,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td className="text-center">Lucia</td>
          <td className="text-center">3,000,000</td>
          <td className="text-center">3,000,000</td>
          <td className="text-center">6,000,000</td>
        </tr>
        <tr>
          <td>3</td>
          <td className="text-center">Lucia</td>
          <td className="text-center">3,000,000</td>
          <td className="text-center">3,000,000</td>
          <td className="text-center">6,000,000</td>
        </tr>
      </table>
    </div>
  )
}

export default TopRanking
