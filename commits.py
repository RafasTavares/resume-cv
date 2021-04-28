import subprocess
from datetime import datetime, timedelta

def generate_amend_commits(year):
    # Define o primeiro dia do ano
    start_date = datetime(year, 1, 1)
    # Define o último dia do ano
    end_date = datetime(year, 12, 31)

    # Itera por todos os dias do ano
    current_date = start_date
    while current_date <= end_date:
        # Verifica se o dia é sábado (5) ou domingo (6)
        if current_date.weekday() in [5, 6]:
            # Formata a data para o commit
            formatted_date = current_date.strftime('%Y-%m-%d')
            print(f"Amend commit para {formatted_date}")

            # Comandos Git para realizar o amend
            try:
                # Altere o commit mais recente
                subprocess.run(["git", "commit", "--amend", "--no-edit", "--date", formatted_date], check=True)
            except subprocess.CalledProcessError as e:
                print(f"Erro ao realizar o amend para {formatted_date}: {e}")
        
        # Incrementa o dia
        current_date += timedelta(days=1)

# Substitua pelo ano desejado
generate_amend_commits(2023)