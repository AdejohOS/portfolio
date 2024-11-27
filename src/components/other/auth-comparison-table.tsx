import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

const AuthComparisonTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='font-bold'>Feature</TableHead>
          <TableHead className='font-bold'>Auth.js(NextAuth.js)</TableHead>
          <TableHead className='font-bold'>Clerk</TableHead>
          <TableHead className='font-bold'>Kinde</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className='font-semibold'>Authentication</TableCell>
          <TableCell>Social logins, custom </TableCell>
          <TableCell>Passwordless, social logins </TableCell>
          <TableCell>OAuth, OIDC, passwordless </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className='font-semibold'>User Management</TableCell>
          <TableCell>Limited, extensible </TableCell>
          <TableCell>Profiles, roles </TableCell>
          <TableCell>Roles, multi-tenancy, metadata </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className='font-semibold'>Feature Flags</TableCell>
          <TableCell>Not available </TableCell>
          <TableCell>Not available </TableCell>
          <TableCell>Built-in </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className='font-semibold'>Compliance</TableCell>
          <TableCell>Dependent on implementation </TableCell>
          <TableCell>GDPR, SOC 2 </TableCell>
          <TableCell>GDPR, SOC 2 </TableCell>
        </TableRow>

        <TableRow>
          <TableCell className='font-semibold'>Best For</TableCell>
          <TableCell>
            Lightweight auth needs, Small to medium projects{' '}
          </TableCell>
          <TableCell>
            Full user management, Apps with advanced user needs{' '}
          </TableCell>
          <TableCell>
            SaaS, feature flag needs, Team/role-based organizations{' '}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default AuthComparisonTable
