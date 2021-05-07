"""empty message

Revision ID: c239383dd38c
Revises: be4049e10f0f
Create Date: 2021-05-07 05:36:59.745201

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c239383dd38c'
down_revision = 'be4049e10f0f'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('sitios', sa.Column('descripcion', sa.String(length=1000), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('sitios', 'descripcion')
    # ### end Alembic commands ###
