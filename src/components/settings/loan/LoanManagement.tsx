import React, { useState } from 'react'
import { PlusCircle, Edit2, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'

interface Loan {
  id: number
  farmerName: string
  amount: number
  purpose: string
  status: 'Pending' | 'Approved' | 'Rejected'
}

const initialLoans: Loan[] = [
  { id: 1, farmerName: 'John Doe', amount: 5000, purpose: 'Equipment', status: 'Approved' },
  { id: 2, farmerName: 'Jane Smith', amount: 3000, purpose: 'Seeds', status: 'Pending' },
]

const LoanForm: React.FC<{ onSubmit: (loan: Omit<Loan, 'id' | 'status'>) => void, initialValues?: Partial<Loan> }> = ({ onSubmit, initialValues }) => {
  const [loan, setLoan] = useState({ farmerName: '', amount: '', purpose: '', ...initialValues })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ farmerName: loan.farmerName, amount: parseFloat(loan.amount), purpose: loan.purpose })
    setLoan({ farmerName: '', amount: '', purpose: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="farmerName">Farmer Name</Label>
        <Input
          id="farmerName"
          value={loan.farmerName}
          onChange={(e) => setLoan({ ...loan, farmerName: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="amount">Loan Amount</Label>
        <Input
          id="amount"
          type="number"
          value={loan.amount}
          onChange={(e) => setLoan({ ...loan, amount: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="purpose">Loan Purpose</Label>
        <Input
          id="purpose"
          value={loan.purpose}
          onChange={(e) => setLoan({ ...loan, purpose: e.target.value })}
          required
        />
      </div>
      <Button type="submit">
        <PlusCircle className="mr-2 h-4 w-4" />
        {initialValues ? 'Update Loan' : 'Create Loan'}
      </Button>
    </form>
  )
}

export default function LoanManagement() {
  const [loans, setLoans] = useState<Loan[]>(initialLoans)
  const [editingLoan, setEditingLoan] = useState<Loan | null>(null)

  const addLoan = (newLoan: Omit<Loan, 'id' | 'status'>) => {
    setLoans(prevLoans => [...prevLoans, { ...newLoan, id: prevLoans.length + 1, status: 'Pending' }])
  }

  const updateLoan = (updatedLoan: Loan) => {
    setLoans(prevLoans => prevLoans.map(loan => loan.id === updatedLoan.id ? updatedLoan : loan))
    setEditingLoan(null)
  }

  const deleteLoan = (id: number) => {
    setLoans(prevLoans => prevLoans.filter(loan => loan.id !== id))
  }

  const updateLoanStatus = (id: number, status: Loan['status']) => {
    setLoans(prevLoans => prevLoans.map(loan => loan.id === id ? { ...loan, status } : loan))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Loan</CardTitle>
        </CardHeader>
        <CardContent>
          <LoanForm onSubmit={addLoan} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Loans</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Farmer Name</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loans.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell>{loan.farmerName}</TableCell>
                  <TableCell>${loan.amount.toFixed(2)}</TableCell>
                  <TableCell>{loan.purpose}</TableCell>
                  <TableCell>
                    <Select
                      value={loan.status}
                      onValueChange={(value: Loan['status']) => updateLoanStatus(loan.id, value)}
                    >
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Approved">Approved</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon" onClick={() => setEditingLoan(loan)}>
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Edit Loan</DialogTitle>
                          </DialogHeader>
                          <LoanForm
                            onSubmit={(updatedLoan) => updateLoan({ ...updatedLoan, id: loan.id, status: loan.status })}
                            initialValues={loan}
                          />
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" size="icon" onClick={() => deleteLoan(loan.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}