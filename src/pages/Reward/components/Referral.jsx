import React from 'react'

function Referral() {
  return (
    <div>
      <table>
        <tr>
          <th> </th>
          <th>Referred users</th>
          <th>Referred points</th>
          <th>Total earned</th>
        </tr>

        <tr>
          <td>
            <div>
              <div>Referral </div>
              <div className="text-[12px]">
                Earn 10% of total points from referred user{' '}
              </div>
            </div>
          </td>
          <td className="text-center">20</td>
          <td className="text-center">3,000,000</td>
          <td className="text-center">3,000,000</td>
        </tr>
      </table>
    </div>
  )
}

export default Referral
