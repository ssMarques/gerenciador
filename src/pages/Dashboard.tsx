// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

import "../styles/Dashboard.css";
import { Cabecalho } from '../components/Cabecalho';
import Rodape from '../components/Rodape';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Transaction {
  name: string;
  amount: number;
  type: 'expense' | 'income';
  description: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [form, setForm] = useState({
    name: '',
    amount: 0,
    type: 'expense' as 'expense' | 'income',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: name === 'amount' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.amount && form.description) {
      setTransactions([...transactions, form]);
      setForm({
        name: '',
        amount: 0,
        type: 'expense',
        description: ''
      });
    }
  };

  const expenses = transactions.filter(tx => tx.type === 'expense');
  const incomes = transactions.filter(tx => tx.type === 'income');

  const chartData = {
    labels: [...expenses.map(tx => tx.name), ...incomes.map(tx => tx.name)], // Nomes separados
    datasets: [
      {
        label: 'Despesas',
        data: expenses.map(tx => tx.amount),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Lucros',
        data: incomes.map(tx => tx.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Permite controle manual do tamanho
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const datasetIndex = context.datasetIndex;
            const index = context.dataIndex;

            const transaction = datasetIndex === 0 ? expenses[index] : incomes[index];
            const label = datasetIndex === 0 ? 'Despesa' : 'Lucro';
            const value = context.raw;

            return `${label}: R$ ${value.toFixed(2)} - ${transaction.description}`;
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          callback: function (val: any, index: any) {
            if (index < expenses.length) {
              return expenses[index].name; // Nomes das despesas
            } else {
              return incomes[index - expenses.length].name; // Nomes dos lucros
            }
          },
        },
      },
    },
  };

  return (
    <div className="dashboard-container">

      <h1>Dashboard</h1>

      <div className="form-container">
        <h2>Adicionar Transação</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Valor:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={form.amount}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Tipo:</label>
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleInputChange}
              required
            >
              <option value="expense">Despesa</option>
              <option value="income">Lucro</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={form.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </div>

      <div style={{ marginTop: '40px' }} className="summary">
        <h2>Resumo Financeiro</h2>
        <div className="summary-item">
          <h3>Despesas Totais</h3>
          <p>R$ {expenses.reduce((total, tx) => total + tx.amount, 0).toFixed(2)}</p>
        </div>
        <div className="summary-item">
          <h3>Lucros Totais</h3>
          <p>R$ {incomes.reduce((total, tx) => total + tx.amount, 0).toFixed(2)}</p>
        </div>
      </div>

      {/* Ajusta o tamanho e espaçamento do gráfico */}
      <div style={{ marginTop: '20px', height: '600px', width: '500px', margin: '1 auto' }} className="grafico">
        <h2>Gráfico de Despesas e Lucros</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div style={{ marginBottom: '50px' }}>
        
      </div>
    </div>
  );
};

export default Dashboard;
