"""empty message

Revision ID: 87309eb13544
Revises: 968e1f25dfdc
Create Date: 2021-04-30 03:10:38.122819

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '87309eb13544'
down_revision = '968e1f25dfdc'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('comentarios', 'fecha',
               existing_type=sa.DATE(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('comentarios', 'fecha',
               existing_type=sa.DATE(),
               nullable=False)
    # ### end Alembic commands ###
